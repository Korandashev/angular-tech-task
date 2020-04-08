export enum ReportTagEnum {
  ACADEMIC = 'academic',
  INTERMEDIATE = 'Intermediate',
  ADVANCED = 'Advanced',
  HARDCORE = 'Hardcore'
}

﻿export interface Report {
  id: string;
  title: string;
  author: string;
  lang: string;
  tags: ReportTag[];
}

﻿export interface ReportTag {
  id: string;
  name: string;
}
