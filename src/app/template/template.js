
fetch('./template/index.html')
    .then(response => response.text())
    .then(templateHtml => startElement(templateHtml));

function startElement(templateHtml) {
    class MiTemplate extends HTMLElement {

        constructor() {
            super();
            this._shadowRoot = this.attachShadow({ mode: 'open' });

            //Creamos un div para poder agregar el template
            let template = document.createElement('div');
            template.innerHTML = templateHtml;
            //Obtenemos el template
            let templateContent = template.querySelector('template');
            //Agregamos el Template a nuestro innerHTML
            this._shadowRoot.appendChild(templateContent.content.cloneNode(true));

            //Agregamos nuestra custom property
            this._miId = 'templateId';
        }

        get obtenerId() {
            return this._miId;
        }

        set setUnId(valor) {
            this._miId = valor;
        }

    }

    customElements.define('mi-template', MiTemplate);
}

