import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Test extends Vue {
  public mounted() {
    const a = new Set();
  }

  public render() {
    return (
      <div>
        <h1>2222</h1>
      </div>
    );
  }
}
