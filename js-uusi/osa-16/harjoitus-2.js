const url = "...";

const container = document.getElementById("container");
const loader = document.getElementById("loader");
let btnRetry;

async function loadProducts() {
    if (btnRetry) {
        btnRetry.remove();
        btnRetry = null;
    }

    let loading = true;
    loader.hidden = false;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            let msg = "Jokin meni pieleen. Yritä uudelleen.";

            if (response.status === 404) {
                msg = "Ei löytynyt.";                
            } else if (response.status === 500) {
                msg = "Palvelinvirhe.";
            }

            throw new Error(`HTTP error: ${response.status} (${msg}).`);
        }

        const data = await response.json();
        renderData(data);
    } catch (error) {
        showErrorMsg(error);
        console.error(error);
        retry();
    } finally {
        loading = false;
        loader.hidden = false;
    }    
}

function createRetryBtn() {
    btnRetry = document.createElement("button");
    btnRetry.type = "button";
    btnRetry.textContent = "Päivitä";

    btnRetry.addEventListener("click", event => {
        loadProducts();
    });

    container.append(btnRetry);
}

function retry() {
    if (!btnRetry) {
        createRetryBtn();        
    }
}
