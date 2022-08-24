import SecretManager from 'aws-sdk/clients/secretsmanager';

function getCkretName(): string {
  const e = (process.env.ENVIRONMENT ?? '').toLowerCase();
  if (e === 'dev' || e === 'development') return 'ckret/dev';
  else if (e === 'stage' || e === 'staging') return 'ckret/staging';
  else if (e === 'prod' || e === 'production') return 'ckret/prod';
  else if (e === 'sandbox') return 'ckret/sandbox';
  else return 'ckret/local';
}

let sm: SecretManager | undefined = undefined;

function init(option: SecretManager.ClientConfiguration): void {
  console.log({ level: "info", "selected_ckret": getCkretName() })
  sm = new SecretManager(option);
}

type CacheType = {
  value: string | undefined;
  exp: Date;
};

const cache: CacheType = {
  value: undefined,
  exp: new Date(),
};

async function getCkret(): Promise<any> {
  if (cache.value === undefined || cache.exp.getTime() <= new Date().getTime()) {
    let s = await sm?.getSecretValue({ SecretId: getCkretName() }).promise();
    cache.value = s?.SecretString;
    cache.exp = new Date(new Date().getTime() + 1000 * 60 * 10);
  }
  return JSON.parse(cache.value!);
}

export { init }
export { getCkret }

