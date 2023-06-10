const swap = (array, pos1, pos2) => {
    [array[pos1], array[pos2]] = [array[pos2], array[pos1]];
  };
  
  const shuffle = (array, numSwaps) => {
    const len = array.length;
    for (let i = 0; i < numSwaps; i++) {
      const pos1 = Math.floor(Math.random() * len);
      const pos2 = Math.floor(Math.random() * len);
      swap(array, pos1, pos2);
    }
  };
  
  const bubble_sort = (array) => {
    const len = array.length;
    for (let i = 0; i < len - 1; i++) {
      for (let j = 0; j < len - 1 - i; j++) {
        if (array[j] > array[j + 1]) {
          swap(array, j, j + 1);
        }
      }
    }
  };
  
  const selection_sort = (array) => {
    const len = array.length;
    for (let i = 0; i < len - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < len; j++) {
        if (array[j] < array[minIndex]) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        swap(array, i, minIndex);
      }
    }
  };
  
  const quick_sort = (array, start, end) => {
    if (start < end) {
      const pivotIndex = partition(array, start, end);
      quick_sort(array, start, pivotIndex - 1);
      quick_sort(array, pivotIndex + 1, end);
    }
  };
  
  const partition = (array, start, end) => {
    const pivot = array[end];
    let i = start - 1;
    for (let j = start; j < end; j++) {
      if (array[j] < pivot) {
        i++;
        swap(array, i, j);
      }
    }
    swap(array, i + 1, end);
    return i + 1;
  };
  
  const add = () => {
    const valorInput = document.getElementById("valor");
    const listaValores = document.getElementById("valores");
    const node = document.createElement("li");
    const textNode = document.createTextNode(valorInput.value);
    node.appendChild(textNode);
    listaValores.appendChild(node);
  };
  
  const ordenar = () => {
    const listaValores = document.getElementById("valores");
    const listaSelecao = document.getElementById("algoritmo");
    const valores = Array.from(listaValores.children).map(item => eval(item.innerHTML));
    let algoritmo = listaSelecao.selectedIndex;
  
    switch (algoritmo) {
      case 0:
        bubble_sort(valores);
        break;
      case 1:
        selection_sort(valores);
        break;
      case 2:
        quick_sort(valores, 0, valores.length - 1);
        break;
      default:
        console.log("Algoritmo inválido");
        break;
    }
  
    listaValores.innerHTML = valores.map(item => `<li>${item}</li>`).join("");
  };
  
  const misturar = () => {
    const listaValores = document.getElementById("valores");
    const valores = Array.from(listaValores.children).map(item => eval(item.innerHTML));
    shuffle(valores, valores.length);
    listaValores.innerHTML = valores.map(item => `<li>${item}</li>`).join("");
  };
  