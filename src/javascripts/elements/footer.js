console.clear()
import logo from "../../imgs/icons/logo.svg";
import inputIcon from "../../imgs/icons/search-icon.svg"

function createFooter() {
    console.log('created footer');
    const footer = document.createElement('footer');
    footer.className = 'footer';

    footer.innerHTML = `
    <div class="search">
        <div class="input">
            <img class="input-icon" src="${inputIcon}" alt="search icon" />
            <input type="text" maxlength="30" placeholder="Поиск" />
        </div>
        <a class="btn" href="#">мащенко софия</a>
        <a class="btn" href="#">акдулун пелин</a>
        <a class="btn" href="#">вконтакте</a>
        <a class="btn" href="#">телеграмм</a>
    </div>

    <a class="logo-link" href="/index.html">
        <img src="${logo}" alt="logo" />
    </a>
    `;

    document.body.append(footer);
    console.log('created footer');
}

document.addEventListener('DOMContentLoaded', createFooter());