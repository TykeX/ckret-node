import SecretManager from 'aws-sdk/clients/secretsmanager';

export class Ckret {
  private value?: string;
  private exp?: Date;
  private sm?: SecretManager
  /**
   * secretId (name) of this ckret instance
   */
  private _name: string;
  /**
   * @param option - aws config for secret manager client like {region: "region-1", ... }
   * @param name - secretId (name) of the secret
   *
   */
  constructor(option: SecretManager.ClientConfiguration, name: string) {
    this.sm = new SecretManager(option)
    this._name = name
  }

  /**
   * @returns value of this ckret instance
   */
  async getCkret(): Promise<any> {
    if (this.value === undefined || this.exp === undefined || this.exp.getTime() <= new Date().getTime()) {
      const s = await this.sm?.getSecretValue({ SecretId: this._name }).promise();
      this.value = s?.SecretString;
      this.exp = new Date(new Date().getTime() + 1000 * 60 * 10); // 10 minute
    }
    return JSON.parse(this.value!);
  }

  /**
   * @returns secretId (name) of this ckret instance
   */
  public name() {
    return this._name
  }
}

let instance: Ckret;
export default {
  Ckret,
  init:
    /**
     * initializes default ckret instance
     */
    (option: SecretManager.ClientConfiguration, name: string) => instance = new Ckret(option, name),
  getCkret:
    /**
     * @returns value of default ckret instance
     */
    async (): Promise<any> => instance!.getCkret(),
  name:
    /**
     * @returns secretId (name) of default ckret instance
     */
    (): string => instance!.name()
}
