const seatData = {
  "seat-1": { name: "Available", title: "", status: "available" },
  "seat-2": { name: "Available", title: "", status: "available" },
  "seat-3": { name: "Available", title: "", status: "available" },
  "seat-4": { name: "Available", title: "", status: "available" },
  "seat-5": { name: "Available", title: "", status: "available" },
  "seat-6": { name: "Daniel Morrison", title: "", status: "used" },
  "seat-7": { name: "Katie Hug", title: "", status: "used" },
  "seat-8": { name: "Jason Goetluck", title: "", status: "used" },
  "seat-9": { name: "Frankie Wren", title: "", status: "used" },
  "seat-10": { name: "Available", title: "", status: "available" },
  "seat-11": { name: "Available", title: "", status: "available" },
  "seat-12": { name: "Available", title: "", status: "available" },
  "seat-13": { name: "Available", title: "", status: "available" },
  "seat-14": { name: "Available", title: "", status: "available" },
  "seat-15": { name: "Available", title: "", status: "available" },
  "seat-16": { name: "Ilian Iliev", title: "", status: "used" },
  "seat-17": { name: "Anthony Helm", title: "", status: "used" },
  "seat-18": { name: "Harrison Rodriguez", title: "", status: "used" },
  "seat-19": { name: "Seth Frisby-Jack", title: "", status: "used" },
  "seat-20": { name: "Eric Carr", title: "", status: "used" },
  "seat-21": { name: "Nate Campbell", title: "", status: "used" },
  "seat-22": { name: "Available", title: "", status: "available" },
  "seat-23": { name: "Available", title: "", status: "available" },
  "seat-24": { name: "Available", title: "", status: "available" },
  "seat-25": { name: "Available", title: "", status: "available" },
  "seat-26": { name: "Cleon Deal", title: "", status: "used" },
  "seat-27": { name: "Derya Ekren", title: "", status: "used" },
  "seat-28": { name: "Seth Cutright", title: "", status: "used" },
  "seat-29": { name: "Nicholas Whittaker", title: "", status: "used" },
  "seat-30": { name: "Patrick Poulos", title: "", status: "used" },
  "seat-31": { name: "Daniel Stuckey", title: "", status: "used" },
  "seat-32": { name: "Logan Perhacs", title: "", status: "used" },
  "seat-33": { name: "Available", title: "", status: "available" },
  "seat-34": { name: "Available", title: "", status: "available" },
  "seat-35": { name: "Eric Lowe", title: "", status: "available" },
  "seat-36": { name: "Available", title: "", status: "available" },
  "seat-37": { name: "Austin Evans", title: "", status: "used" },
  "seat-38": { name: "Derek Williams", title: "", status: "used" },
  "seat-39": { name: "Jake Cadotte", title: "", status: "used" },
  "seat-40": { name: "Available", title: "", status: "available" },
  "seat-41": { name: "Available", title: "", status: "available" },
  "seat-42": { name: "Available", title: "", status: "available" },
  "seat-43": { name: "Available", title: "", status: "available" },
  "seat-44": { name: "Available", title: "", status: "available" },
  "seat-45": { name: "Available", title: "", status: "available" },
  "seat-46": { name: "Available", title: "", status: "available" },
  "seat-47": { name: "Available", title: "", status: "available" },
  "seat-48": { name: "Available", title: "", status: "available" },
  "seat-49": { name: "Available", title: "", status: "available" },
  "seat-50": { name: "Available", title: "", status: "available" },
  "seat-51": { name: "Available", title: "", status: "available" },
  "seat-52": { name: "Richard Wilson", title: "", status: "used" },
  "seat-53": { name: "Available", title: "", status: "available" },
  "seat-54": { name: "Available", title: "", status: "available" },
  "seat-55": { name: "Available", title: "", status: "available" },
  "seat-56": { name: "Available", title: "", status: "available" },
  "seat-57": { name: "Available", title: "", status: "available" },
  "seat-58": { name: "Available", title: "", status: "available" },
  "seat-59": { name: "Available", title: "", status: "available" },
  "seat-60": { name: "Available", title: "", status: "available" },
  "seat-61": { name: "Available", title: "", status: "available" },
  "seat-62": { name: "Jesse Halpern", title: "", status: "used" },
  "seat-63": { name: "Available", title: "", status: "available" },
  "seat-64": { name: "Available", title: "", status: "available" },
  "seat-65": { name: "Available", title: "", status: "available" },
  "seat-66": { name: "Available", title: "", status: "available" },
  "seat-67": { name: "Available", title: "", status: "available" },
  "seat-68": { name: "Brian Keifer", title: "", status: "used" },
  "seat-69": { name: "Shawn Boone", title: "", status: "used" },
  "seat-70": { name: "Isaiah Tirado", title: "", status: "used" },
  "seat-71": { name: "Benjamin Durham", title: "", status: "used" },
  "seat-72": { name: "Available", title: "", status: "available" },
  "seat-73": { name: "Available", title: "", status: "available" },
  "seat-74": { name: "Alex Boucher", title: "", status: "used" },
  "seat-75": { name: "Mia Scharrenberg", title: "", status: "used" },
  "seat-76": { name: "Andrew Flores", title: "", status: "used" },
  "seat-77": { name: "Cody Rogowski", title: "", status: "used" },
  "seat-78": { name: "Nick Tosto", title: "", status: "used" },
  "seat-79": { name: "Cody Southiere", title: "", status: "used" },
  "seat-80": { name: "Available", title: "", status: "available" },
  "seat-81": { name: "Available", title: "", status: "available" },
  "seat-82": { name: "Available", title: "", status: "available" },
  "seat-83": { name: "Available", title: "", status: "available" },
  "seat-84": { name: "William Russell", title: "", status: "used" },
  "seat-85": { name: "Joshua Reyes", title: "", status: "used" },
  "seat-86": { name: "Available", title: "", status: "available" },
  "seat-87": { name: "Available", title: "", status: "available" },
  "seat-88": { name: "Steven Sargeant", title: "", status: "used" },
  "seat-89": { name: "Available", title: "", status: "available" },
  "seat-90": { name: "Available", title: "", status: "available" },
  "seat-91": { name: "Available", title: "", status: "available" },
  "seat-92": { name: "Available", title: "", status: "available" },
  "seat-93": { name: "Available", title: "", status: "available" },
  "seat-94": { name: "Available", title: "", status: "available" },
  "seat-95": { name: "Available", title: "", status: "available" },
  "seat-96": { name: "Available", title: "", status: "available" },
  "seat-97": { name: "Available", title: "", status: "available" },
  "seat-98": { name: "Available", title: "", status: "available" },
  "seat-99": { name: "Alison O'Brien", title: "HR Specialist", status: "used" },
  "seat-100": { name: "Samantha Bensch", title: "Recruiter", status: "used" },
  "seat-101": { name: "Anna Hopkins", title: "Recruiting Team Lead", status: "used" },
  "seat-102": { name: "Available", title: "", status: "available" },
  "seat-103": { name: "Available", title: "", status: "available" },
  "seat-104": { name: "Teagan Metnick", title: "IT Support Intern", status: "used" },
  "seat-105": { name: "Katie Nichter", title: "HR Intern", status: "used" },
  "seat-106": { name: "Available", title: "", status: "available" },
  "seat-107": { name: "Available", title: "", status: "available" },
  "seat-108": { name: "Willie Dunham", title: "", status: "used" },
  "seat-109": { name: "Nate Wood", title: "", status: "used" },
  "seat-110": { name: "Colin Julian", title: "", status: "used" },
  "seat-111": { name: "Available", title: "", status: "available" },
  "seat-112": { name: "Available", title: "", status: "available" },
  "seat-113": { name: "Available", title: "", status: "available" },
  "seat-114": { name: "Available", title: "", status: "available" },
  "seat-115": { name: "Adam Kraemer", title: "", status: "used" },
  "seat-116": { name: "Available", title: "", status: "available" },
  "seat-117": { name: "Available", title: "", status: "available" },
  "seat-118": { name: "Lexi Enderby", title: "", status: "used" },
  "seat-119": { name: "Available", title: "", status: "available" },
  "seat-120": { name: "Available", title: "", status: "available" },
  "seat-121": { name: "Available", title: "", status: "available" },
  "seat-122": { name: "Available", title: "", status: "available" },
  "seat-123": { name: "Available", title: "", status: "available" },
  "seat-124": { name: "Available", title: "", status: "available" },
  "seat-125": { name: "Available", title: "", status: "available" },
  "seat-126": { name: "Available", title: "", status: "available" },
  "seat-127": { name: "Available", title: "", status: "available" },
  "seat-128": { name: "Available", title: "", status: "available" },
  "seat-129": { name: "Available", title: "", status: "available" },
  "seat-130": { name: "Zachary Eckerson", title: "", status: "used" },
  "seat-131": { name: "Ryan Skelly", title: "", status: "used" },
  "seat-132": { name: "Carson Tomey", title: "", status: "available" },
  "seat-133": { name: "Riley Golden", title: "", status: "used" },
  "seat-134": { name: "Available", title: "", status: "available" },
  "seat-135": { name: "Available", title: "", status: "available" },
  "seat-136": { name: "Charles Book", title: "", status: "used" },
  "seat-137": { name: "Kyler Rossi", title: "", status: "used" },
  "seat-138": { name: "Joshua Conn", title: "", status: "used" },
  "seat-139": { name: "Available", title: "", status: "available" },
  "seat-140": { name: "Jillian Klopp", title: "", status: "used" },
  "seat-141": { name: "Available", title: "", status: "available" },
  "seat-142": { name: "Available", title: "", status: "available" },
  "seat-143": { name: "Available", title: "", status: "available" },
  "seat-144": { name: "Zachary Brumm", title: "", status: "used" },
  "seat-145": { name: "Marios Delis", title: "", status: "used" },
  "seat-146": { name: "Adam Cox", title: "", status: "used" },
  "seat-147": { name: "Available", title: "", status: "available" },
  "seat-148": { name: "Available", title: "", status: "available" },
  "seat-149": { name: "AJ Trapasso", title: "", status: "used" }

  // add more seats here...
};

const ADMIN_PASSWORD = 'BBI-123';

const tooltip = document.getElementById("tooltip");
const container = document.getElementById("chart-container");
let selectedSeatId = null;

const editor = document.getElementById("admin-editor");
const nameInput = document.getElementById("editor-name");
const titleInput = document.getElementById("editor-title");
const statusInput = document.getElementById("editor-status");
const saveButton = document.getElementById("save-seat");

saveButton.addEventListener("click", () => {
  if (!selectedSeatId) return;
  const floorplan = document.getElementById("floorplan-svg");
  let seat = document.getElementById(selectedSeatId);
  if (!seat && floorplan && floorplan.contentDocument) {
    seat = floorplan.contentDocument.getElementById(selectedSeatId);
  }
  if (!seat) return;
  const details = seatData[selectedSeatId];
  details.name = nameInput.value;
  details.title = titleInput.value;
   details.status = statusInput.value;
  seat.classList.remove("available", "used", "reserved");
  seat.classList.add(details.status);
  seat.dataset.tooltip =
    `Seat ${selectedSeatId.replace("seat-", "")}: ${details.name}${details.title ? " - " + details.title : ""}`;
  tooltip.textContent = seat.dataset.tooltip;
  editor.classList.add("hidden");
  localStorage.setItem("seatData", JSON.stringify(seatData));
});

function isAdminMode() {
  return document.body.classList.contains('admin-mode');
}

function moveTooltip(x, y) {
  const rect = container.getBoundingClientRect();
  tooltip.style.left = x - rect.left + 1 + "px";
  tooltip.style.top = y - rect.top + 1 + "px";
}

function initSeats() {
  Object.entries(seatData).forEach(([id, data]) => {
    const seat = document.getElementById(id);
    if (!seat) return;

    seat.classList.add("seat");
    seat.classList.add(data.status);

    const seatNumber = id.replace("seat-", "");
    seat.dataset.tooltip = `Seat ${seatNumber}: ${data.name}${data.title ? " - " + data.title : ""}`;

    seat.addEventListener("mouseenter", (e) => {
      tooltip.textContent = seat.dataset.tooltip;
      tooltip.style.opacity = "1";
      moveTooltip(e.clientX, e.clientY);
    });

    seat.addEventListener("mousemove", (e) => {
      moveTooltip(e.clientX, e.clientY);
    });

   seat.addEventListener("mouseleave", () => {
  tooltip.style.opacity = "0";
});

seat.addEventListener("click", (e) => {
  if (isAdminMode()) {
     selectedSeatId = id;
    nameInput.value = data.name;
    titleInput.value = data.title;
     statusInput.value = data.status;
    editor.classList.remove("hidden");
  } else {
        if (selectedSeatId && selectedSeatId !== id) {
          const prev = document.getElementById(selectedSeatId);
          if (prev) prev.classList.remove("selected");
        }

        if (selectedSeatId === id) {
          seat.classList.remove("selected");
          selectedSeatId = null;
        } else {
          seat.classList.add("selected");
          selectedSeatId = id;
        }

        document.getElementById("seat-info").textContent = selectedSeatId
          ? `Selected: ${seatData[id].name} ${seatData[id].title ? `(${seatData[id].title})` : ''}`
          : "";
        tooltip.textContent = seat.dataset.tooltip;
        tooltip.style.opacity = "1";
        moveTooltip(e.clientX, e.clientY);
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggle-mode");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
       if (!isAdminMode()) {
        const pwd = prompt("Enter admin password:");
        if (pwd === ADMIN_PASSWORD) {
          document.body.classList.add("admin-mode");
        } else if (pwd !== null) {
          alert("Incorrect password.");
        }
      } else {
        document.body.classList.remove("admin-mode");
      }
      toggleBtn.textContent = isAdminMode()
        ? "Switch to User Mode"
        : "Switch to Admin Mode";
    });
  }

  const exportBtn = document.getElementById("export-data");
  if (exportBtn) {
    exportBtn.addEventListener("click", () => {
      console.log(JSON.stringify(seatData, null, 2));
      alert("Check the console for updated seat data.");
    });
  }
  const stored = localStorage.getItem("seatData");
if (stored) {
  Object.assign(seatData, JSON.parse(stored));
}

  const svg = document.getElementById("floorplan-svg");

  if (svg && svg.tagName.toLowerCase() === "object") {
    svg.addEventListener("load", () => {
      const svgDoc = svg.contentDocument;
      const style = document.createElementNS("http://www.w3.org/2000/svg", "style");
      style.textContent = `
        .used { fill: #ff4d4f; }
        .available { fill: #4caf50; }
        .reserved { fill: #ffcc00; }
        .selected { stroke: #0000ff; stroke-width: 2; }
        .seat-label { font-size: 10px; fill: black; pointer-events: none; }
      `;
      svgDoc.documentElement.appendChild(style);

      Object.entries(seatData).forEach(([id, data]) => {
        const seat = svgDoc.getElementById(id);
        if (!seat) return;

        seat.classList.add("seat", data.status);
        seat.setAttribute("title", `${data.name}${data.title ? " – " + data.title : ""}`);

        const seatNumber = id.replace("seat-", "");
        seat.dataset.tooltip = 'Seat ${seatNumber}: ${data.name}${data.title ? " - " + data.title : ""}';

        const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
        const x = parseFloat(seat.getAttribute("x"));
        const y = parseFloat(seat.getAttribute("y"));
        text.textContent = seatNumber;
        text.setAttribute("x", x + 5);
        text.setAttribute("y", y + 12);
        text.setAttribute("class", "seat-label");
        svgDoc.documentElement.appendChild(text);

        seat.addEventListener("click", (e) => {
            if (isAdminMode()) {
              selectedSeatId = id;
              nameInput.value = data.name;
              titleInput.value = data.title;
              statusInput.value = data.status;
              editor.classList.remove("hidden");
            } else {
             
            if (selectedSeatId && selectedSeatId !== id) {
              const prev = svgDoc.getElementById(selectedSeatId);
              if (prev) prev.classList.remove("selected");
            }

            if (selectedSeatId === id) {
              seat.classList.remove("selected");
              selectedSeatId = null;
            } else {
              seat.classList.add("selected");
              selectedSeatId = id;
            }

            document.getElementById("seat-info").textContent = selectedSeatId
              ? `Selected: ${seatData[id].name} ${seatData[id].title ? `(${seatData[id].title})` : ''}`
              : "";
           tooltip.textContent = seat.dataset.tooltip;
           tooltip.style.opacity = "1";
           moveTooltip(e.clientX, e.clientY);
          }
        });
      });
    });
  } else {
    initSeats();
  }
});
