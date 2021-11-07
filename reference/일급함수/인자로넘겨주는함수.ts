function ul(child: string): string {
    return `<ul>${child}</ul>`;
}

function ol(child: string): string {
    return `<ol>${child}</ol>`;
}

function makeLi(
    container: (child: string) => string, contents: string[]): string {
      const liList = [];
      for(const content of contents){
        liList.push(`<li>${content}</li>`);
    }
    
    return container(liList.join(''));
}

const htmlUl = makeLi(ul, ['월', '화', '수']);
const htmlOl = makeLi(ol, ['1', '2', '3']);

console.log(htmlUl);
console.log(htmlOl);