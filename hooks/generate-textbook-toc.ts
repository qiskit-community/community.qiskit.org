import fs from 'fs'

type TocType = Array<[string, string[]]>

/**
 * Extract the table of contents at the `static/textbook/index.html` file
 * and uses it to keep `content/education/textbook-toc.md` up to date. This
 * file contains the contents of the TOC preview at `/education`.
 */
export default function generateTextbookToc() {
  const toc = extractToc('./static/textbook/index.html')
  const mdTocLines = formatToc(toc)
  writeToc(mdTocLines.join('\n'), './content/education/textbook-toc.md')
}

function extractToc(indexPath: string): TocType {
  const indexContent = fs.readFileSync(indexPath, 'utf8')
  const allChapters = indexContent.match(/Chapter\s+\d+\.\s+[^<]+/g) || []
  const allTopics = (indexContent.match(/(\d+.\d+\s+)<a[^>]+([^<]+)/g) || [])
    .map(entry => entry.replace(/<a[^>]+>/, ''))

  return allChapters.reduce<TocType>((output, title, index) => {
    const chapters = getTopics(index, allTopics)
    output.push([title, chapters])
    return output
  }, [])
}

function getTopics(index: number, allTopics: string[]) {
  return allTopics.filter(topic => topic.startsWith(`${index}.`))
}

function formatToc(toc: TocType): string[] {
  return withHeader(
    'Table of Contents',
    toc.reduce<string[]>((output, [title, chapters]) => {
      output.push(formatTitle(title))
      output.push(...formatChapters(chapters))
      return output
    }, [])
  )

  function withHeader(title: string, lines: string[]): string[] {
    lines.unshift(`## ${title}`)
    return lines
  }

  function formatTitle(title: string): string {
    return `### ${title}`
  }

  function formatChapters(chapters: string[]): string[] {
    return chapters
      .map(title => `- ${(title.match(/\s.+/) as string[])[0].trim()}`)
  }
}

function writeToc(contents: string, tocPath: string) {
  fs.writeFileSync(tocPath, contents)
}
