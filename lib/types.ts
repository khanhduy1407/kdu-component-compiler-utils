import { SFCDescriptor } from './parse'

export interface StartOfSourceMap {
  file?: string
  sourceRoot?: string
}

export interface RawSourceMap extends StartOfSourceMap {
  version: string
  sources: string[]
  names: string[]
  sourcesContent?: string[]
  mappings: string
}

export interface KduTemplateCompiler {
  parseComponent(source: string, options?: any): SFCDescriptor

  compile(
    template: string,
    options: KduTemplateCompilerOptions
  ): KduTemplateCompilerResults

  ssrCompile(
    template: string,
    options: KduTemplateCompilerOptions
  ): KduTemplateCompilerResults
}

// we'll just shim this much for now - in the future these types
// should come from kdu-template-compiler directly, or this package should be
// part of the kdu monorepo.
export interface KduTemplateCompilerOptions {
  modules?: Object[]
  outputSourceRange?: boolean
  whitespace?: 'preserve' | 'condense'
  directives?: { [key: string]: Function }
}

export interface KduTemplateCompilerParseOptions {
  pad?: 'line' | 'space'
}

export interface ErrorWithRange {
  msg: string
  start: number
  end: number
}

export interface KduTemplateCompilerResults {
  ast: Object | undefined
  render: string
  staticRenderFns: string[]
  errors: (string | ErrorWithRange)[]
  tips: (string | ErrorWithRange)[]
}
