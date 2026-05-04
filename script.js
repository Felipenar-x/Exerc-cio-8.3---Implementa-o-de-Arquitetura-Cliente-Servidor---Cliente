const API_URL = 'http://127.0.0.1:5000/api/livros';
const categorias = ["Suspense", "Romance", "Horror", "Ficção Científica", "Fantasia", "Tecnologia", "História", "Distopia", "Filosofia", "Finanças"];

async function carregarPagina(categoria = '', busca = '') {
    try {
        const url = `${API_URL}?categoria=${categoria}&q=${busca}`;
        const response = await fetch(url);
        const data = await response.json();

        renderizarBanner(data.banner);
        renderizarLivros(data.livros);
        document.getElementById('contador-livros').innerText = `${data.livros ? data.livros.length : 0} livros encontrados`;
    } catch (error) {
        console.error("Erro ao conectar com a API:", error);
        document.getElementById('lista-livros').innerHTML = `<p class="text-red-500 text-center">Erro ao conectar com o servidor.</p>`;
    }
}

function renderizarBanner(banner) {
    const container = document.getElementById('banner-container');
    if (banner) {
        container.innerHTML = `
            <div class="${banner.cor} text-white p-6 rounded-xl mb-8 shadow-lg flex justify-between items-center transition-all animate-soft-pulse">
                <div>
                    <span class="bg-white/20 text-xs font-bold px-2 py-1 rounded-md uppercase mb-2 inline-block">Oferta do Mês</span>
                    <h2 class="text-2xl font-bold">${banner.evento}!</h2>
                    <p class="text-white/90">Aproveite descontos exclusivos de até ${banner.desconto}.</p>
                </div>
                <span class="text-5xl hidden md:block">🔖</span>
            </div>`;
    } else {
        container.innerHTML = '';
    }
}

function renderizarLivros(livros) {
    const lista = document.getElementById('lista-livros');
    if (!livros || livros.length === 0) {
        lista.innerHTML = `
            <div class="text-center py-20 bg-white rounded-xl border-2 border-dashed border-gray-200">
                <p class="text-gray-400 font-medium">Nenhum livro encontrado.</p>
            </div>`;
        return;
    }

    lista.innerHTML = livros.map(livro => `
        <div class="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all border border-gray-50 flex flex-col group">
            <div class="flex justify-between items-start mb-2">
                <div>
                    <h3 class="text-lg font-semibold text-gray-900 group-hover:text-purple-700 transition-colors">${livro.titulo}</h3>
                    <span class="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-bold uppercase tracking-wider">${livro.categoria}</span>
                </div>
            </div>
            ${renderizarAvaliacoes(livro.avaliacoes)}
        </div>
    `).join('');
}

function renderizarAvaliacoes(avaliacoes) {
    if (!avaliacoes || avaliacoes.length === 0) return '';
    return `
        <div class="mt-4 space-y-3">
            <p class="text-xs font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100 pb-1">Opinião dos Leitores</p>
            ${avaliacoes.map(aval => `
                <div class="p-3 bg-gray-50 rounded-lg border-l-4 border-purple-400">
                    <div class="flex items-center mb-1">
                        <span class="text-yellow-600 font-bold text-xs mr-1">${aval.nota}</span>
                        <span class="text-yellow-400 text-sm">★</span>
                    </div>
                    <p class="text-gray-600 italic text-sm">"${aval.texto}"</p>
                </div>
            `).join('')}
        </div>`;
}

function realizarBusca() {
    const categoria = document.getElementById('search-input').value;
    const titulo = document.getElementById('title-input').value;
    carregarPagina(categoria, titulo);
}

function limparFiltros() {
    document.getElementById('search-input').value = '';
    document.getElementById('title-input').value = '';
    carregarPagina();
}

// Configuração do Dropdown de Categorias
const input = document.getElementById('search-input');
const dropdown = document.getElementById('custom-dropdown');

input.addEventListener('input', () => {
    const valor = input.value.toLowerCase();
    dropdown.innerHTML = '';
    if (valor.length > 0) {
        const filtradas = categorias.filter(c => c.toLowerCase().includes(valor));
        if (filtradas.length > 0) {
            dropdown.classList.remove('hidden');
            filtradas.forEach(cat => {
                const item = document.createElement('div');
                item.className = 'px-4 py-3 hover:bg-purple-50 cursor-pointer text-gray-700 border-b border-gray-50 last:border-0';
                item.innerHTML = cat;
                item.onclick = () => { 
                    input.value = cat; 
                    dropdown.classList.add('hidden'); 
                    realizarBusca(); 
                };
                dropdown.appendChild(item);
            });
        } else { dropdown.classList.add('hidden'); }
    } else { dropdown.classList.add('hidden'); }
});

// Inicialização da página
document.addEventListener('DOMContentLoaded', () => carregarPagina());