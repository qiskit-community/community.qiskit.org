import fs from 'fs'

type TocType = Array<[string, string[]]>

/**
 * Extract the table of contents at `indexPath` and uses it to generate
 * a markdown TOC at `tocPath`, suitable for being rendered in `/education`.
 *
 * @param indexPath HTML file where the TOC is extracted from.
 * @param tocPath output Markdown file path where TOC is generated.
 */
export default function generateTextbookToc(indexPath: string, tocPath: string) {
  const indexContent = fs.readFileSync(indexPath, 'utf8')
  const toc = extractToc(indexContent)
  const mdTocLines = formatTocLines(toc)
  writeToc(mdTocLines.join('\n'), tocPath)
}

function extractToc(indexContent: string): TocType {
  // Chapter titles are of form `Chapter X. Chapter title<`.
  const allChapters = (indexContent.match(/Chapter\s+\d+\.\s+[^<]+/g) || [])
    .map(entry => entry.trim())
  // Topic titles are of form `X.Y <a ...>Topic Title<`
  const allTopics = (indexContent.match(/(\d+.\d+\s+)<a[^>]+([^<]+)/g) || [])
    .map(entry => entry.replace(/<a[^>]+>/, '').trim())

  return allChapters.reduce<TocType>((output, title, index) => {
    const chapters = getTopics(index, allTopics)
    output.push([title, chapters])
    return output
  }, [])
}

function getTopics(index: number, allTopics: string[]) {
  return allTopics.filter(topic => topic.startsWith(`${index}.`))
}

function formatTocLines(toc: TocType): string[] {
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
