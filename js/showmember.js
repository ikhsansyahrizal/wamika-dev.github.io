data.map((anggota) => {
  const listContainer = document.getElementById("daftar-anggota");
  const button = document.createElement("button");
  const article = document.createElement("article");
  const img = document.createElement("img");
  img.src = anggota.image;
  button.innerHTML = anggota.nama;
  article.append(img);
  article.append(button);
  listContainer.append(article);
});
