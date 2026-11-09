# Cliniq Agency — Landing Page v1.0

Website institucional responsivo em português europeu, baseado na direção visual Alpine Green aprovada.

## Estrutura
- `index.html`: conteúdo e componentes semânticos
- `styles.css`: identidade visual, desktop, tablet e mobile
- `script.js`: menu mobile e formulário de contacto
- `vercel.json`: configuração básica de publicação e cabeçalhos

## Executar localmente
Abra `index.html` no navegador ou execute `python -m http.server 8080` nesta pasta e visite http://localhost:8080.

## Publicar no GitHub e Vercel
1. Crie um repositório no GitHub e envie estes quatro arquivos.
2. Na Vercel, selecione **Add New → Project → Import Git Repository**.
3. Selecione **Framework Preset: Other**, diretório raiz `./` e publique.
4. Adicione seu domínio nas configurações do projeto e configure os DNS indicados pela Vercel.
5. Utilize um plano da Vercel compatível com uso comercial.

## Antes de lançar
- **Formulário:** substitua `contacto@SEU-DOMINIO.pt` em `script.js` pelo email real. Atualmente o formulário exibe aviso de demonstração e não envia dados. Para maior confiabilidade, integrar um serviço de formulários com consentimento e política de privacidade.
- **Texto da headline:** a frase “nenhuma tem um aplicativo próprio” é uma hipérbole comercial; verifique se deseja manter uma alegação absoluta.
- **Projetos e números:** todos os projetos e interfaces apresentados são conceitos ilustrativos, sem alegações de clientes reais ou resultados.
- **Identidade:** o logo atual é tipográfico. Produzir logo final, favicon e imagens sociais antes do lançamento.
- **Legal:** adicionar Política de Privacidade e informação legal adequada ao público de Portugal antes de recolher dados pessoais.
- **Fonts:** Manrope e DM Sans são carregadas do Google Fonts. O título editorial utiliza Georgia como fallback serifado. Ajustes tipográficos finos podem ser feitos após comparar no navegador.
- **Produto:** os apps mostrados são conceitos. As funcionalidades finais dependem do escopo contratado; não afirmar publicação automática em lojas de apps.

## Tecnologias
HTML5, CSS3 e JavaScript puro, sem dependências de build. Pode ser hospedado como site estático.
