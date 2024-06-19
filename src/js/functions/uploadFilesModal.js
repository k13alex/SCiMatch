export const uploadFilesModal = () => {
  const modal = document.querySelector(".modal-upload");

  if (modal) {
    const fileInput = document.getElementById("file-input");
    const previewContainer = document.getElementById("file-preview");

    fileInput.addEventListener("change", function (event) {
      const files = event.target.files;

      // Очистка контейнера перед добавлением новых превью
      previewContainer.innerHTML = "";

      Array.from(files).forEach((file, index) => {
        if (file) {
          // Проверка типа файла
          if (!file.type.startsWith("image/")) {
            alert("Please upload image files only.");
            return;
          }

          // Проверка размера файла (макс. 2MB)
          if (file.size > 2 * 1024 * 1024) {
            alert("File size exceeds 2MB.");
            return;
          }

          // Создание FileReader для загрузки превью
          const reader = new FileReader();
          reader.onload = function (e) {
            const previewItem = createPreviewItem(e.target.result);
            previewContainer.appendChild(previewItem);
          };
          reader.readAsDataURL(file);
        }
      });
    });

    // Функция для создания элемента превью с изображением и кнопкой удаления
    function createPreviewItem(imageSrc) {
      const previewItem = document.createElement("div");
      previewItem.classList.add("preview-item");

      const img = document.createElement("img");
      img.src = imageSrc;
      img.alt = "Image Preview";

      const removeBtn = document.createElement("div");
      removeBtn.classList.add("remove-btn");
      removeBtn.textContent = "×";
      removeBtn.addEventListener("click", (e) => {
        e.stopPropagation(); // Предотвращаем всплытие события
        previewItem.remove();

        // Проверяем, остались ли ещё файлы после удаления
        const remainingFiles = fileInput.files.length;
        if (remainingFiles === 0) {
          // Если файлы удалены, сбрасываем значение input и вызываем событие change
          fileInput.value = ""; // Сбрасываем текущее значение input
          const event = new Event("change", { bubbles: true }); // Создаём событие change
          fileInput.dispatchEvent(event); // Диспатчим событие на input
        }
      });

      previewItem.appendChild(img);
      previewItem.appendChild(removeBtn);

      return previewItem;
    }
  }
};
