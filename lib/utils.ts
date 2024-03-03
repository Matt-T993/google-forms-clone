import { type ClassValue, clsx } from "clsx"
import { IFormsDataEntity } from "oneentry/dist/formsData/formsDataInterfaces"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getResponses(formsData: IFormsDataEntity[], id: string) {
  // get all responses for a form with a given id
  return Object.values(formsData).filter(
    (formData) => formData.formIdentifier === id
  );
}
