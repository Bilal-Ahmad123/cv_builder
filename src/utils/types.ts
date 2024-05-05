export type personalDataType = {
  FirstName: String;
  LastName: String;
  Github?: String;
  Facebook?: String;
  Instagram?: String;
  PhoneNo: String;
  Gmail: String;
  Website?: String;
  Twitter?: String;
  Linkedin?: String;
};

export type education = {
  Institute: string;
  From: string;
  To: string;
  Qualification: string;
  Description: string;
}[];

export type projects = {
  Title: String;
  Link: String;
  Description: String;
}[];

export type extras = {
  Skills: string[];
  Interests: string[];
};

export type experience = {
  Institute: string;
  Position: string;
  Duration: string;
  Description: string;
}[];

export type resumeData = {
  data: {
    personalData: personalDataType;
    education: education;
    projects: projects;
    extras: extras;
    experience: experience;
  };
};
