export interface Config {
  directory: string;
  aliases: {
    [key: string]: string;
  };
  configVersion: string;
}

export interface ComponentSource {
  name: string;
  content: string;
}

export interface ComponentMetadata {
  name: string;
  version: string;
  dependencies: string[];
}
