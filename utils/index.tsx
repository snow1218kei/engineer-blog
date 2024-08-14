const slugify = function (text: string): string {
    return text
        .toString()
        .toLowerCase()
        .replace(/\s+/g, '-') // スペースを - に置換
        .replace(/[^\w-]+/g, '') // 単語以外の文字を削除
        .replace(/--+/g, '-') // 複数の - を単一の - に置換
        .replace(/^-+/, '') // テキストの先頭から - をトリム
        .replace(/-+$/, ''); // テキストの末尾から - をトリム
};

const getCategoryColorClass = (categoryName: string): string => {
    switch (categoryName.toLowerCase()) {
        case 'technology':
            return 'bg-blue-500';
        case 'health':
            return 'bg-red-500';
        case 'finance':
            return 'bg-green-500';
        case 'travel':
            return 'bg-yellow-500';
        default:
            return 'bg-gray-500'; // デフォルトの背景色
    }
};

export { slugify, getCategoryColorClass };