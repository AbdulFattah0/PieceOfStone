import { useRouter } from '@/lib/router';

/**
 * Navigate to a section on the home page.
 * If we're already on the home page, scroll to the section.
 * If we're on another page, navigate home first, then scroll after render.
 */
export function useNavigateToSection() {
  const { path, navigate } = useRouter();

  return (sectionId: string) => {
    const isHome = path === '/' || path === '';

    if (isHome) {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }

    // Navigate home first, then scroll after the page renders
    navigate('/');
    const scroll = () => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Element not rendered yet — retry shortly
        setTimeout(scroll, 80);
      }
    };
    setTimeout(scroll, 150);
  };
}
