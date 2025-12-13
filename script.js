let input = document.getElementById('input')
let gallery = document.getElementById('gallery')
let btn = document.getElementById('btn')

const getPhotos = async () => {
    const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${input.value}&client_id=KfpqKSLF1wwJencONCA3eHHwQge0_eE5StZNnsbJNuU`
    );

    const result = await response.json();
    RenderPhotos(result.results);
};

btn.addEventListener('click', getPhotos);

const RenderPhotos = (photos) => {
    gallery.innerHTML = ""; 

    photos.forEach(photo => {
        let div = document.createElement('div');
        div.innerHTML = `
            <div class="card" style="width: 18rem;">
                <img src="${photo.urls.regular}" class="card-img-top" alt="">
                <div class="card-body">
                    <p class="card-text">
                        ${photo.alt_description || "Описание отсутствует"}
                    </p>
                </div>
            </div>
        `
        gallery.append(div);
    });
};