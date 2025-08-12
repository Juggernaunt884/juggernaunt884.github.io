const skills = document.querySelectorAll('.skill');
const projects = document.querySelectorAll('.project');

projects.forEach(project => {
  project.addEventListener('mouseenter', () => {
    clearHighlights();
    project.classList.add('highlight');
    const relatedSkills = project.dataset.skills.split(',');
    relatedSkills.forEach(s => {
      const skillEl = document.querySelector(`.skill[data-skill="${s}"]`);
      if (skillEl) skillEl.classList.add('highlight');
    });
  });
  project.addEventListener('mouseleave', clearHighlights);
});

skills.forEach(skill => {
  skill.addEventListener('mouseenter', () => {
    clearHighlights();
    skill.classList.add('highlight');
    const skillName = skill.dataset.skill;
    projects.forEach(project => {
      if (project.dataset.skills.includes(skillName)) {
        project.classList.add('highlight');
      }
    });
  });
  skill.addEventListener('mouseleave', clearHighlights);
});

function clearHighlights() {
  skills.forEach(s => s.classList.remove('highlight'));
  projects.forEach(p => p.classList.remove('highlight'));
}
