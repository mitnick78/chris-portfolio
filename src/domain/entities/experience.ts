export interface Experience {
  id: string;
  company: string;
  role: string;
  description: string;
  highlights: string[];
  stack: string[];

  /** (ex: "2023-01-15") */
  startDate: string;

  /**
   * Date de fin au format ISO.
   * Si absent (undefined) = poste actuel → on affichera "Présent" dans l'UI.
   */
  endDate?: string;
  logo?: string;
  companyUrl?: string;
}
