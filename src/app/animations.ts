import { animate, animateChild, group, query, stagger, style, transition, trigger } from "@angular/animations";

export const topBottomAnimation =
    trigger('routeAnimations', [
        transition("* <=> bioPage", [     
            query(':leave', style({ display:  "none"}), {optional: true}), 
            // TODO: Find better selector ':enter' is not working with stagger and '*' queries ':leave' as well 
            query('*', [
                style({ opacity: 0 }), stagger(10, [
                    animate(1, style({ opacity: 1 }))
                ])
            ])      
        ]),
        transition("* <=> aboutPage", [     
            query(':leave', style({ display:  "none"}), {optional: true}),  
            query('*', [
                style({ opacity: 0 }), stagger(10, [
                    animate(1, style({ opacity: 1 }))
                ])
            ])      
        ])
    ])