const anchor = require("@project-serum/anchor");

const { SystemProgram } = anchor.web3;

const main = async () => {
  console.log("🚀 Starting test...");

  anchor.setProvider(anchor.Provider.env());
  const program = anchor.workspace.VotingDapp;
  const provider = anchor.Provider.env();

  const baseAcc = anchor.web3.Keypair.generate();

  const tx = await program.rpc.initialize({
    accounts: {
      baseAcc: baseAcc.publicKey,
      user: provider.wallet.publicKey,
      systemProgram: SystemProgram.programId,
    },
    signers: [baseAcc],
  });

  console.log("📝 Your transaction signature", tx);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();
