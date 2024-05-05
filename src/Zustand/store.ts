import { create } from "zustand";
import {
  education,
  experience,
  extras,
  personalDataType,
  projects,
} from "../utils/types";

interface myTypes {
  personalDetails: personalDataType | null;
  education: education | [];
  projects: projects | [];
  extra: extras | null;
  experience: experience | [];
  setPersonalDetails: (data: personalDataType) => void;
  setEducation: (data: education) => void;
  setExtra: (data: extras) => void;
  setExperience: (data: experience) => void;
  setProjects: (data: projects) => void;
}

export const useResume = create<myTypes>((set) => ({
  personalDetails: null,
  education: [],
  projects: [],
  extra: null,
  experience: [],
  setPersonalDetails: (data) => set((state) => ({ personalDetails: data })),

  setEducation: (data) => set((state) => ({ education: data })),

  setProjects: (data) => set((state) => ({ projects: data })),

  setExtra: (data) => set((state) => ({ extra: data })),

  setExperience: (data) => set((state) => ({ experience: data })),
}));
