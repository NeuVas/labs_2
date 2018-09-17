<script>
    {
        // Board расположен по адресу: https://kodaktor.ru/g/compo1_ea630
        console.clear();
        class MyButton {
            constructor(caption) {
                this.caption = caption;
                return new Promise((res, rej) => {
                    window.addEventListener('DOMContentLoaded', this.render.bind(this, res));
                });
            }
            render(res) {
                const b = document.body.appendChild(document.createElement('button'));
                b.appendChild(document.createTextNode(this.caption));
                res(b);
            }
        }
        (async () => {
            const bt = await new MyButton('click');
            bt.style.zoom = '200%';
            bt.addEventListener(
                'click',
                ({ target: t }) => {
                    t.textContent = t.nodeName;
                }
            );
        })();
    }
</script>