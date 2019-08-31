window.addEventListener('load', function(){
    const now = Date.now();
    const year = new Date(now).getFullYear();
    const month = new Date(now).getMonth();

    function parcentage_month(){
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(new Date(year, month + 1, 1) - 1);
        const value = parseInt(Math.floor((now - firstDay)));
        const max = parseInt(Math.floor(lastDay - firstDay));
        return parseInt(Math.floor((value / max) * 100));
    }

    function progress_month(){
        const progress = document.createElement("progress");
        progress.max = 100;
        progress.value = parcentage_month();
        progress.id = 'dayProgress'
        return progress;
    }

    function parcentage_year(){
        const firstDay = new Date(year, 0, 1);
        const lastDay = new Date(new Date(year+1, 0, 1) - 1);
        const value = parseInt(Math.floor((now - firstDay)));
        const max = parseInt(Math.floor(lastDay - firstDay));
        return parseInt(Math.floor((value / max) * 100));
    }

    function progress_year(){
        const progress = document.createElement("progress");
        progress.max = 100;
        progress.value = parcentage_year();
        progress.id = 'yearProgress'
        return progress;
    }

    function change_progress_month(gap){
        return setTimeout(function(){
            const firstDay = new Date(year, month, 1);
            const lastDay = new Date(new Date(year, month + 1, 1) - 1);
            const progress = document.getElementsByTagName('dayProgress');
            const value = parseInt(Math.floor((now - firstDay)));
            const max = parseInt(Math.floor(lastDay - firstDay));
            progress.max = 100;
            progress.value = parseInt(Math.floor((value / max) * 100));
        }, gap);
    }

    function change_progress_year(gap){
        return setTimeout(function(){
            const firstDay = new Date(year, 1, 1);
            const lastDay = new Date(new Date(year+1, 1, 1) - 1);
            const progress = document.getElementsByTagName('dayProgress');
            const value = parseInt(Math.floor((now - firstDay)));
            const max = parseInt(Math.floor(lastDay - firstDay));
            progress.max = 100;
            progress.value = parseInt(Math.floor((value / max) * 100));
        }, gap);
    }

    this.document.body.appendChild(document.createElement('p')).innerText = `${month+1}月の進行度 (${parcentage_month()}%)`;
    document.body.appendChild(progress_month());
    this.document.body.appendChild(document.createElement('p')).innerText = `${year}年の進行度 (${parcentage_year()}% あと ${100 - parcentage_year()}%)`;
    document.body.appendChild(progress_year());
    change_progress_month(1000*60*60);
    change_progress_year(100*60*60);
});