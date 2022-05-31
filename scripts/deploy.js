// scripts/deploy.js
const { ethers, upgrades } = require('hardhat');
const fs = require('fs');

async function main () {
    const Something = await ethers.getContractFactory('Something');
    console.log('Deploying...');
    const something = await upgrades.deployProxy(
        Something, 
        [], 
        { initializer: 'initialize' }
    );
    await something.deployed();
    const addresses = {
        proxy: something.address,
        admin: await upgrades.erc1967.getAdminAddress(something.address), 
        implementation: await upgrades.erc1967.getImplementationAddress(
            something.address)
    };
    console.log('Addresses:', addresses);

    try { 
        await run('verify', { address: addresses.implementation });
    } catch (e) {}

    fs.writeFileSync('deployment-addresses.json', JSON.stringify(addresses));
}

main();