function toggleMenu(menuIcon) {
  const menu = menuIcon.parentNode
  const state = menu.className.split(' ')[1]
  const icon = menuIcon.getElementsByTagName('svg')[0]

  // Create new icon
  const newIcon = document.createElement("i")
  newIcon.setAttribute("data-feather", state === "close" ? "x" : "menu");

  // Replace icon
  menuIcon.replaceChild(newIcon, icon)
  feather.replace()

  menu.className = menu.className.replace(state, state === "close" ? "open" : "close")
}