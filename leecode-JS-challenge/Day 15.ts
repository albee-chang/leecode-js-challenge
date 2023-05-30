<!-- 為什麼要使用debounce技術？
您是否曾經遇到過一個函數在短時間內被多次調用的情況，從而導致性能問題或意外行為？這在 JavaScript 中是一個常見的問題，尤其是在處理滾動、調整大小或輸入等事件時。

幸運的是，有一個簡單的技術稱為「debounce」可以幫助您控制函數調用的頻率，並避免這些問題。

什麼是debounce？
防抖是一種限制函數調用頻率的方法。它通過延遲函數的執行，直到在一定的時間內沒有任何其他函數調用。如果在這個時間段內發生另一個函數調用，計時器會重新啟動，函數的執行會再次延遲。

防抖在以下情況下很有用：

處理使用者輸入事件，例如按鍵、滑鼠移動或按鈕點擊

處理不需要在每次函數調用時都執行的昂貴計算或網路請求

透過使用防抖技術，您可以有效地控制函數的執行頻率，以達到更好的性能和用戶體驗。 -->

type F = (...p: any[]) => any

function debounce(fn: F, t: number): F {
    let timer : ReturnType<typeof setTimeout>;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), t);
            
    }
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */
