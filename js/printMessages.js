function createNewRow() {
  const row = document.createElement("div");
  row.classList.add("console-row");
  const rowText = document.createElement("p");
  rowText.textContent = "guest@mywebsite ~ % ";
  row.appendChild(rowText);

  return row;
}

export function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function createCursor() {
  const cursor = document.createElement("span");
  cursor.classList.add("cursor", "visible");
  return cursor;
}

function createSpan() {
  const span = document.createElement("span");
  span.classList.add("text-span");
  return span;
}

function printTextOnRow(row, text, cursor) {
  return new Promise((resolve) => {
    const symbols = text.split("");
    let index = 0;

    const interval = setInterval(() => {
      if (index < symbols.length) {
        cursor.classList.remove("blink");
        row.children[1].textContent = symbols.slice(0, index + 1).join("");
        index++;
      } else {
        clearInterval(interval);
        cursor.classList.add("blink");
        resolve();
      }
    }, 80);
  });
}

export default async function printMessages(messages, container) {
  const cursor = createCursor();
  let index = 0;
  for (const message of messages) {
    const newRow = createNewRow();
    newRow.appendChild(createSpan());
    newRow.appendChild(cursor);
    container.appendChild(newRow);
    if (index > 0) {
      await delay(700);
    }
    await printTextOnRow(newRow, message, cursor);
    index++;
  }
  return index;
}
