import { signal,computed } from '@angular/core'

export class {{name}}{

 state = signal(null)

 loading = signal(false)

 data = computed(()=>this.state())

}