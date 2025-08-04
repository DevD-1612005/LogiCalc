const API_URL = "http://localhost:5000";

async function calculate() {
  const input1 = parseFloat(document.getElementById("input1").value);
  const input2 = parseFloat(document.getElementById("input2").value);
  const operation = document.getElementById("operation").value;

  if (isNaN(input1) || isNaN(input2)) {
    alert("Enter valid numbers.");
    return;
  }

  try {
    const res = await fetch(`${API_URL}/calculate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ input1, input2, operation }),
    });

    const data = await res.json();

    if (res.ok) {
      document.getElementById("result").innerText = "Result: " + data.result;
      loadHistory();
    } else {
      alert(data.message || "Calculation failed.");
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

async function loadHistory() {
  try {
    const res = await fetch(`${API_URL}/calculations`);
    const history = await res.json();
    const list = document.getElementById("historyList");

    list.innerHTML = "";

    history.forEach((entry) => {
      const item = document.createElement("li");
      item.textContent = `${entry.input1} ${entry.operation} ${entry.input2} = ${entry.result}`;
      list.appendChild(item);
    });
  } catch (error) {
    console.error("History load error:", error);
  }
}
async function clearHistory() {
  if (!confirm("Are you sure you want to delete all history?")) return;

  try {
    const res = await fetch(`${API_URL}/calculations`, {
      method: "DELETE",
    });

    if (res.ok) {
      loadHistory(); // Refresh list
      document.getElementById("result").innerText = "Result: ";
    } else {
      alert("Failed to delete history.");
    }
  } catch (err) {
    console.error("Delete error:", err);
  }
}

// Load history on page load
window.onload = loadHistory;
