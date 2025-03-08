// utils/googleSheets.ts

/**
 * Submit form data to Google Sheets using Google Apps Script
 * @param formData The data to submit to Google Sheets
 * @param endpoint The deployed Google Apps Script web app URL
 * @returns Promise with the response
 */
export const submitToGoogleSheets = async (
  formData: Record<string, unknown>,
  endpoint: string
): Promise<{ success: boolean; message: string }> => {
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Failed to submit form");
    }

    return {
      success: true,
      message: "Form submitted successfully",
    };
  } catch (error) {
    console.error("Error submitting to Google Sheets:", error);
    return {
      success: false,
      message:
        error instanceof Error ? error.message : "An unknown error occurred",
    };
  }
};
