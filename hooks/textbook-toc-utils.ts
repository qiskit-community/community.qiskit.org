type TocType = Array<[string, string[]]>

export { extractToc, formatTocLines, TocType }

function extractToc (indexContent: string): TocType {
  // Chapter titles are of form `X. Chapter title<`.
  const allChapters = (indexContent.match(/>\s+\d+\.\s+[^<]+/g) || []).map(clean)
  // Topic titles are of form `X.Y Topic Title<`
  const allTopics = (indexContent.match(/>\s+\d+.\d+\s+[^<]+/g) || []).map(clean)
  return allChapters.reduce<TocType>((output, title, index) => {
    const chapters = getTopics(index, allTopics)
    output.push([title, chapters])
    return output
  }, [])

  function getTopics (index: number, allTopics: string[]) {
    return allTopics.filter(topic => topic.startsWith(`${index}.`))
  }

  function clean (str: string) {
    return str.replace(/>\s+/, '').replace(/\s+/g, ' ').trim()
  }
}

function formatTocLines (toc: TocType, header: string = 'Table of Contents'): string[] {
  return withHeader(
    header,
    toc.reduce<string[]>((output, [title, chapters]) => {
      output.push(formatTitle(title))
      output.push(...formatChapters(chapters))
      return output
    }, [])
  )

  function withHeader (title: string, lines: string[]): string[] {
    lines.unshift(`## ${title}`)
    return lines
  }

  function formatTitle (title: string): string {
    return `### Chapter ${title}`
  }

  function formatChapters (chapters: string[]): string[] {
    return chapters
      .map(title => `- ${(title.match(/\s.+/) as string[])[0].trim()}`)
  }
}
