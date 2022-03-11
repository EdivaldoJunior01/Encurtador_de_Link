//buscar links salvos
export async function getLinkSave(key){
    const myLinks = await localStorage.getItem(key); // acessando o LocalStorage do navegador
    
    let linksSaves = JSON.parse(myLinks) || [];

    return linksSaves;
}
//salvar link no local storage
export async function saveLink(key, newLink) {
    let linksStored = await getLinkSave(key);
    //se já tiver um link salvo não deixar duplicar
    const haslink  = linksStored.some(link => link.id === newLink.id);
    if(haslink) {
        console.log('já existe aqui esse link');
        return;
    }
    //adc novo link na lista de
    linksStored.push(newLink);
    await localStorage.setItem(key,JSON.stringify(linksStored));
    console.log('link salvo com sucesso')
}
//deletar algum link salvo
export function deleLink(links, id){
    let myLinks = links.filter(item => {
        return (item.id !== id)
    })
    localStorage.setItem('@chavelink', JSON.stringify(myLinks));
    console.log('link deletado')

    return myLinks;
}