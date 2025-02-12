export const USER_ABI = [{"type":"constructor","inputs":[{"name":"_user","type":"address","internalType":"address"},{"name":"_identityRegistry","type":"address","internalType":"address"},{"name":"_userWalletSettings","type":"address","internalType":"address"},{"name":"_userFactory","type":"address","internalType":"address"}],"stateMutability":"nonpayable"},{"type":"function","name":"addBond","inputs":[{"name":"bondAddress","type":"address","internalType":"address"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"breakBond","inputs":[{"name":"bondAddress","type":"address","internalType":"address"}],"outputs":[],"stateMutability":"payable"},{"type":"function","name":"createBond","inputs":[{"name":"partner","type":"address","internalType":"address"},{"name":"asset","type":"address","internalType":"address"},{"name":"yieldServiceProvider","type":"address","internalType":"address"},{"name":"initialAmount","type":"uint256","internalType":"uint256"},{"name":"bondFactoryAddresss","type":"address","internalType":"address"}],"outputs":[{"name":"","type":"address","internalType":"address"}],"stateMutability":"payable"},{"type":"function","name":"getAllBonds","inputs":[],"outputs":[{"name":"","type":"address[]","internalType":"address[]"}],"stateMutability":"view"},{"type":"function","name":"owner","inputs":[],"outputs":[{"name":"","type":"address","internalType":"address"}],"stateMutability":"view"},{"type":"function","name":"renounceOwnership","inputs":[],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"slashingWords","inputs":[{"name":"","type":"string","internalType":"string"}],"outputs":[{"name":"","type":"string","internalType":"string"}],"stateMutability":"view"},{"type":"function","name":"stake","inputs":[{"name":"bondAddress","type":"address","internalType":"address"},{"name":"amount","type":"uint256","internalType":"uint256"}],"outputs":[],"stateMutability":"payable"},{"type":"function","name":"transferOwnership","inputs":[{"name":"newOwner","type":"address","internalType":"address"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"user","inputs":[],"outputs":[{"name":"userAddress","type":"address","internalType":"address"},{"name":"totalBonds","type":"uint256","internalType":"uint256"},{"name":"totalAmount","type":"uint256","internalType":"uint256"},{"name":"totalWithdrawnBonds","type":"uint256","internalType":"uint256"},{"name":"totalBrokenBonds","type":"uint256","internalType":"uint256"},{"name":"totalActiveBonds","type":"uint256","internalType":"uint256"},{"name":"totalWithdrawnAmount","type":"uint256","internalType":"uint256"},{"name":"totalBrokenAmount","type":"uint256","internalType":"uint256"},{"name":"createdAt","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"userFactory","inputs":[],"outputs":[{"name":"","type":"address","internalType":"contract UserFactory"}],"stateMutability":"view"},{"type":"function","name":"verifyIdentity","inputs":[{"name":"identityTag","type":"string","internalType":"string"},{"name":"data","type":"bytes","internalType":"bytes"}],"outputs":[{"name":"","type":"bool","internalType":"bool"}],"stateMutability":"nonpayable"},{"type":"function","name":"withdraw","inputs":[{"name":"bondAddress","type":"address","internalType":"address"}],"outputs":[],"stateMutability":"payable"},{"type":"event","name":"BondDeployed","inputs":[{"name":"asset","type":"address","indexed":true,"internalType":"address"},{"name":"user1","type":"address","indexed":false,"internalType":"address"},{"name":"user2","type":"address","indexed":false,"internalType":"address"},{"name":"totalAmount","type":"uint256","indexed":false,"internalType":"uint256"},{"name":"timestamp","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false},{"type":"event","name":"OwnershipTransferred","inputs":[{"name":"previousOwner","type":"address","indexed":true,"internalType":"address"},{"name":"newOwner","type":"address","indexed":true,"internalType":"address"}],"anonymous":false},{"type":"event","name":"UserCreated","inputs":[{"name":"user","type":"address","indexed":true,"internalType":"address"},{"name":"timestamp","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false},{"type":"error","name":"InvalidRegistryAddress","inputs":[]},{"type":"error","name":"OwnableInvalidOwner","inputs":[{"name":"owner","type":"address","internalType":"address"}]},{"type":"error","name":"OwnableUnauthorizedAccount","inputs":[{"name":"account","type":"address","internalType":"address"}]},{"type":"error","name":"ResolverNotFound","inputs":[]}] as const