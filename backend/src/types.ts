export type UserCreditProfile = {
  account: string;
  rootAccount: string;
  createdAt: string;
  updatedAt: string;
  totalGdDepositedWei: string;
  totalPrincipalUsd: string;
  totalBonusUsd: string;
  totalGDStreamedWei: string;
  totalOutstandingFundingUsd: string;
  streamFlowRateWeiPerSecond: string;
  lastStreamCreditAt: string | undefined;
};

export type GdCreditEntry = {
  id: string;
  account: string;
  rootAccount: string;
  source: "deposit" | "streamUpdate" | "streamRequest" | "streamCron";
  gdAmountWei: string;
  principalUsd: string;
  bonusUsd: string;
  totalCreditUsd: string;
  txHash?: string;
  logIndex?: number;
  fundingStatus: "pending" | "funded" | "failed";
  fundingTxHash?: string;
  fundingError?: string;
  createdAt: string;
  streamUpdateMonth: string;
  /** AntSeed buyer account address to which credits are funded. */
  buyerAddress?: string;
  /** End of the stream window this entry pays for; becomes the account's `lastStreamCreditAt` once funded. */
  streamCreditedThrough?: string;
};
