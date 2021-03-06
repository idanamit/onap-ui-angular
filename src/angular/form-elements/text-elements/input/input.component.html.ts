export const template = `
<div class="sdc-input ">
    <label class="sdc-input__label" *ngIf="label" [ngClass]="{'required':required}">{{label}}</label>
    <div class="sdc-input-wrapper">
        <input
            class="sdc-input__input {{classNames}} {{size}}"
            [ngClass]="{'error': (!valid && dirty), 'disabled':disabled}"
            [attr.name]="name ? name : null"
            [placeholder]="placeHolder"
            [(ngModel)]="value"
            [maxlength]="maxLength"
            [minlength]="minLength"
            [type]="type"
            [formControl]="control"
            [attr.disabled]="disabled ? 'disabled' : null"
            (input)="onKeyPress($event.target.value)"
            [attr.data-tests-id]="testId"
        />
        <svg-icon *ngIf="righIconName" class="input-right-icon" [name]="righIconName" mode="secondary" (click)="onIconClicked()" [clickable]="isIconClickable" size="medium"></svg-icon>
    </div>
</div>
`;
