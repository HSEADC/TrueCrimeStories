console.clear()
import inputIcon from "../../imgs/icons/search-icon.svg"
import clearSearchIcon from "../../imgs/icons/cross.svg"
import logo from "../../imgs/icons/logo.svg"

function createHeader() {
  const header = document.createElement('header');
  header.className = 'header';

  header.innerHTML = `
    <div class="search">
      <div class="input">
        <img class="input-icon" src="${inputIcon}" alt="search icon" />
        <input type="text" maxlength="30" placeholder="Поиск" />
      </div>
      <span class="tag filter-tag">россия</span>
      <span class="tag filter-tag">сша</span>
      <span class="tag filter-tag">20 век</span>
      <span class="tag filter-tag">21 век</span>
      <span class="tag filter-tag">закрытые дела</span>
      <span class="tag filter-tag">непойманы</span>
      <button class="btn filter-tag filter-tag--clear" aria-label="Очистить фильтры">
        <img src="${clearSearchIcon}" alt="clear search icon" />
      </button>
    </div>
    `;
  document.getElementsByClassName('main')[0].prepend(header);
  // document.body.prepend(header);
}

document.addEventListener('DOMContentLoaded', createHeader());