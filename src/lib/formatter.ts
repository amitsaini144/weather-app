
export function formatDateTime(timestamp: number): string {
    const date = new Date(timestamp * 1000);
    
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const month = months[date.getMonth()];
    
    const day = date.getDate();
    
    let hours = date.getHours();
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; 
    
    const minutes = date.getMinutes().toString().padStart(2, '0');
    
    return `${month} ${day}, ${hours}:${minutes}${ampm}`;
  }