// Utility function to handle resume download
export const downloadResume = () => {
  // Create a dummy PDF download - in a real app, this would be your actual resume file
  const link = document.createElement('a');
  link.href = '/resume-rudraksh-taya.pdf'; // Path to your resume file in the public folder
  link.download = 'Rudraksh_Taya_Resume.pdf';
  link.target = '_blank';
  
  // Fallback for browsers that don't support download attribute
  if (!link.download) {
    window.open(link.href, '_blank');
    return;
  }
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// Utility function to copy email to clipboard
export const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    // Fallback for older browsers
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
      document.execCommand('copy');
      document.body.removeChild(textArea);
      return true;
    } catch (err) {
      document.body.removeChild(textArea);
      return false;
    }
  }
};

// Utility function for smooth scrolling with offset
export const smoothScrollTo = (elementId: string, offset: number = 80) => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};
