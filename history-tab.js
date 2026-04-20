historyTab.addEventListener('click', function(){
    historySection.classList.remove('hidden');
    dashboard.classList.add('hidden');

    // add class list to style on history tab button
    historyTab.classList.add('text-white', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600');

    // remove assistant tab button style 
    assistantTab.classList.add('text-gray-600')
    assistantTab.classList.remove('text-white', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600');

});