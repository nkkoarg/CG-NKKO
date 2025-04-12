async function pedirConsejo() {
  const texto = document.getElementById("inputTexto").value;
  const respuestaDiv = document.getElementById("respuesta");

  if (!texto.trim()) {
    respuestaDiv.textContent = "Escribí algo primero.";
    return;
  }

  respuestaDiv.textContent = "Pensando...";

  const prompt = `Dame una respuesta motivacional fuerte, directa y clara como un mentor a este mensaje: "${texto}"`;

  const apiKey = "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"; // Reemplazalo por tu API key de OpenAI

  try {
    const response = await fetch("https://api.openai.com/v1/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "text-davinci-003",
        prompt: prompt,
        max_tokens: 100,
        temperature: 0.9,
      }),
    });

    const data = await response.json();
    const textoIA = data.choices[0].text.trim();
    respuestaDiv.textContent = textoIA;
  } catch (error) {
    respuestaDiv.textContent = "Error al conectar con la IA.";
    console.error(error);
  }
}
