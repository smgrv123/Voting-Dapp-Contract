use anchor_lang::prelude::*;

declare_id!("Fg6PaFpoGXkYsidMpWTK6W2BeZ7FEfcYkg476zPFsLnS");

#[program]
pub mod voting_dapp {
    use super::*;
    pub fn initialize(ctx: Context<Initialize>) -> ProgramResult {
        let base_acc= &mut ctx.accounts.base_acc;

        base_acc.vote=("es").to_string();
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize<'info> {
    #[account(init,payer=user,space=9000)]
    pub base_acc:Account<'info,BaseAcc>,
    #[account(mut)]
    pub user:Signer<'info>,
    pub system_program:Program<'info,System>
}

#[account]
pub struct BaseAcc{
    pub vote:String
}
