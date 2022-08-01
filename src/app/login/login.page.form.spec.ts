import { FormBuilder, Validators} from "@angular/forms";
import{ FormGroup } from "@angular/forms";

export class LoginPageForm{
    private fromBuilder:FormBuilder;
 

    constructor(formBuilder: FormBuilder){
        this.fromBuilder = formBuilder;

    }

    createForm() : FormGroup{
        return this.fromBuilder.group({
            email:['',[Validators.required, Validators.email]] ,
            password:['', [Validators.required]]
        });
    }
} 