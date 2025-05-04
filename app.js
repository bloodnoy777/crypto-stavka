const connector = new TonConnect.TonConnect({
    manifestUrl: 'https://your-website.com/tonconnect-manifest.json'
});

document.getElementById('connect-wallet').addEventListener('click', async () => {
    const wallets = await connector.getWallets();
    const wallet = wallets[0]; // Tonkeeper или OpenMask
    
    await connector.connect({ jsBridgeKey: wallet.jsBridgeKey });
    
    if (connector.connected) {
        document.getElementById('connect-wallet').style.display = 'none';
        document.getElementById('wallet-info').style.display = 'block';
        document.getElementById('bet-up').disabled = false;
        document.getElementById('bet-down').disabled = false;
        
        const address = connector.account?.address;
        document.getElementById('wallet-address').textContent = 
            `${address.slice(0, 4)}...${address.slice(-4)}`;
    }
});

function placeBet(direction) {
    alert(`Вы поставили на ${direction === 'up' ? 'рост' : 'падение'}. Проверка через 1 минуту!`);
    // Здесь будет логика проверки цены BTC
}

document.getElementById('bet-up').addEventListener('click', () => placeBet('up'));
document.getElementById('bet-down').addEventListener('click', () => placeBet('down'));