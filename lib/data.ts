import api from "@/app/oneentry";

export const fetchMenuItems = async (marker: string) => {
  try {
    const menus = await api.Menus.getMenusByMarker(marker);

    return menus;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch menu items");
  }
};

export const fetchAllForms = async () => {
  try {
    const formsData = await api.Forms.getAllForms();

    const forms = Object.values(formsData)
      .map((form) => form)
      .sort((a, b) => b.position - a.position);

    return forms;
  } catch (error) {
    console.error("Database Error", error);
    throw new Error("Failed to fetch forms");
  }
};

export const fetchFormById = async(id: string) => {
  try{
    const formData = await api.Forms.getFormByMarker(id)
    return formData;
  } catch (error) {
      console.error("Datanase Error:", error);
      throw new Error("Failed to fetch form");
    }
  }


