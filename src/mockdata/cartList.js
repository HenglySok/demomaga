

const cartList =
    [
        {
            "id": 233,
            "title": "Hunter X Hunter",
            "author": "Yoshihiro Togashi",
            "image": "https://m.media-amazon.com/images/M/MV5BYzYxOTlkYzctNGY2MC00MjNjLWIxOWMtY2QwYjcxZWIwMmEwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
            "chapter": 352,
            "views": 7346884
        },
        {
            "id": 234,
            "title": "One Piece",
            "author": "Eiichiro Oda",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9NqwOcLRIGIaiEsLaoplT4uiiO0vP3sPgZQ&s",
            "chapter": 1149,
            "views": 232373
        },
        {
            "id": 235,
            "title": "Demon Slayer",
            "author": "Koyoharu Gotouge",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjErp_U0j9M_27CSgYJOe-Zf_J_0FSLJyTSQ&s",
            "chapter": 53,
            "views": 194563
        },
        {
            "id": 236,
            "title": "Black Clover",
            "author": "Yuki Tabata",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1hSDy685CLfoMuD7N02HIfngif8K8rQAoqA&s",
            "chapter": 671,
            "views": 3533572
        },
        {
            "id": 237,
            "title": "Naruto",
            "author": "Masashi Kishimoto",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiccwKj3fabqP1EGVJgaVGN4Bvaaxdy64fTg&s",
            "chapter": 1020,
            "views": 6430784
        },
        {
            "id": 238,
            "title": "Chainsaw Man",
            "author": "Tatsuki Fujimoto",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyl7L1WIdbZOZhN1XTBxquTZVzePYZVz6NfQ&s",
            "chapter": 32,
            "views": 382404
        },
        {
            "id": 233,
            "title": "Hunter X Hunter",
            "author": "Yoshihiro Togashi",
            "image": "https://m.media-amazon.com/images/M/MV5BYzYxOTlkYzctNGY2MC00MjNjLWIxOWMtY2QwYjcxZWIwMmEwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
            "chapter": 352,
            "views": 7346884
        },
        {
            "id": 234,
            "title": "One Piece",
            "author": "Eiichiro Oda",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9NqwOcLRIGIaiEsLaoplT4uiiO0vP3sPgZQ&s",
            "chapter": 1149,
            "views": 232373
        },
        {
            "id": 235,
            "title": "Demon Slayer",
            "author": "Koyoharu Gotouge",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjErp_U0j9M_27CSgYJOe-Zf_J_0FSLJyTSQ&s",
            "chapter": 53,
            "views": 194563
        },
        {
            "id": 236,
            "title": "Black Clover",
            "author": "Yuki Tabata",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1hSDy685CLfoMuD7N02HIfngif8K8rQAoqA&s",
            "chapter": 671,
            "views": 3533572
        },
        {
            "id": 237,
            "title": "Naruto",
            "author": "Masashi Kishimoto",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiccwKj3fabqP1EGVJgaVGN4Bvaaxdy64fTg&s",
            "chapter": 1020,
            "views": 6430784
        },
        {
            "id": 238,
            "title": "Chainsaw Man",
            "author": "Tatsuki Fujimoto",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyl7L1WIdbZOZhN1XTBxquTZVzePYZVz6NfQ&s",
            "chapter": 32,
            "views": 382404
        },
        {
            "id": 233,
            "title": "Hunter X Hunter",
            "author": "Yoshihiro Togashi",
            "image": "https://m.media-amazon.com/images/M/MV5BYzYxOTlkYzctNGY2MC00MjNjLWIxOWMtY2QwYjcxZWIwMmEwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
            "chapter": 352,
            "views": 7346884
        },
        {
            "id": 234,
            "title": "One Piece",
            "author": "Eiichiro Oda",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9NqwOcLRIGIaiEsLaoplT4uiiO0vP3sPgZQ&s",
            "chapter": 1149,
            "views": 232373
        },
        {
            "id": 235,
            "title": "Demon Slayer",
            "author": "Koyoharu Gotouge",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjErp_U0j9M_27CSgYJOe-Zf_J_0FSLJyTSQ&s",
            "chapter": 53,
            "views": 194563
        },
        {
            "id": 236,
            "title": "Black Clover",
            "author": "Yuki Tabata",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1hSDy685CLfoMuD7N02HIfngif8K8rQAoqA&s",
            "chapter": 671,
            "views": 3533572
        },
        {
            "id": 233,
            "title": "Hunter X Hunter",
            "author": "Yoshihiro Togashi",
            "image": "https://m.media-amazon.com/images/M/MV5BYzYxOTlkYzctNGY2MC00MjNjLWIxOWMtY2QwYjcxZWIwMmEwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
            "chapter": 352,
            "views": 7346884
        },
        {
            "id": 234,
            "title": "One Piece",
            "author": "Eiichiro Oda",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9NqwOcLRIGIaiEsLaoplT4uiiO0vP3sPgZQ&s",
            "chapter": 1149,
            "views": 232373
        },
        {
            "id": 235,
            "title": "Demon Slayer",
            "author": "Koyoharu Gotouge",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjErp_U0j9M_27CSgYJOe-Zf_J_0FSLJyTSQ&s",
            "chapter": 53,
            "views": 194563
        },
        {
            "id": 236,
            "title": "Black Clover",
            "author": "Yuki Tabata",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1hSDy685CLfoMuD7N02HIfngif8K8rQAoqA&s",
            "chapter": 671,
            "views": 3533572
        },
        {
            "id": 233,
            "title": "Hunter X Hunter",
            "author": "Yoshihiro Togashi",
            "image": "https://m.media-amazon.com/images/M/MV5BYzYxOTlkYzctNGY2MC00MjNjLWIxOWMtY2QwYjcxZWIwMmEwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
            "chapter": 352,
            "views": 7346884
        },
        {
            "id": 234,
            "title": "One Piece",
            "author": "Eiichiro Oda",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9NqwOcLRIGIaiEsLaoplT4uiiO0vP3sPgZQ&s",
            "chapter": 1149,
            "views": 232373
        },
        {
            "id": 235,
            "title": "Demon Slayer",
            "author": "Koyoharu Gotouge",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjErp_U0j9M_27CSgYJOe-Zf_J_0FSLJyTSQ&s",
            "chapter": 53,
            "views": 194563
        },
        {
            "id": 236,
            "title": "Black Clover",
            "author": "Yuki Tabata",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1hSDy685CLfoMuD7N02HIfngif8K8rQAoqA&s",
            "chapter": 671,
            "views": 3533572
        },
        {
            "id": 234,
            "title": "One Piece",
            "author": "Eiichiro Oda",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9NqwOcLRIGIaiEsLaoplT4uiiO0vP3sPgZQ&s",
            "chapter": 1149,
            "views": 232373
        },
        {
            "id": 235,
            "title": "Demon Slayer",
            "author": "Koyoharu Gotouge",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjErp_U0j9M_27CSgYJOe-Zf_J_0FSLJyTSQ&s",
            "chapter": 53,
            "views": 194563
        },
        {
            "id": 236,
            "title": "Black Clover",
            "author": "Yuki Tabata",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1hSDy685CLfoMuD7N02HIfngif8K8rQAoqA&s",
            "chapter": 671,
            "views": 3533572
        },
        {
            "id": 233,
            "title": "Hunter X Hunter",
            "author": "Yoshihiro Togashi",
            "image": "https://m.media-amazon.com/images/M/MV5BYzYxOTlkYzctNGY2MC00MjNjLWIxOWMtY2QwYjcxZWIwMmEwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
            "chapter": 352,
            "views": 7346884
        },
        {
            "id": 234,
            "title": "One Piece",
            "author": "Eiichiro Oda",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9NqwOcLRIGIaiEsLaoplT4uiiO0vP3sPgZQ&s",
            "chapter": 1149,
            "views": 232373
        },
        {
            "id": 235,
            "title": "Demon Slayer",
            "author": "Koyoharu Gotouge",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjErp_U0j9M_27CSgYJOe-Zf_J_0FSLJyTSQ&s",
            "chapter": 53,
            "views": 194563
        },
        {
            "id": 236,
            "title": "Black Clover",
            "author": "Yuki Tabata",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1hSDy685CLfoMuD7N02HIfngif8K8rQAoqA&s",
            "chapter": 671,
            "views": 3533572
        },
    ]
export default cartList;