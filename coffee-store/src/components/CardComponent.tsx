import React from 'react';

{/*what we are doing is we are extending the HTML DIV attributes properties to this new interface
    `extends` is like inheriting, interface will have all the properties it is inheriting to
    React.HTMLAttributes<HTMLDivElement> , all the standard HTML Attributes u can put in a div tag,
    By saying CardProps extends React.HTMLAttributes<HTMLDivElement>, you are effectively saying:
    "My CardProps interface should include all the properties that a standard <div> element can have (like id, onClick, style, aria-label, etc.)."
    
    */}
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
}


// interface for CardContent Props
interface CardContentProps extends React.HTMLAttributes<HTMLDivElement>
{
    className?:string;
}

// interface for CardHeader Props
interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement>
{
    className?:string;
}

// interface for CardTitle Props
interface CardTitleProps extends React.HTMLAttributes<HTMLDivElement>
{
    className?:string;
}



// now write the Card component
export const Card: React.FC<CardProps> = ({
    className,
    children,
    ...restProps
}) => {
    return (
        <div
      // We combine the default styles with any custom 'className' passed in
      className={`border border-coffee-200 rounded-lg ${className || ''}`}
      {...restProps} // Apply any other HTML properties here
    >
      {children} {/* This is where the content inside the Card goes */}
    </div>
    )
}

export const CardContent: React.FC<CardContentProps> = ({
    className,
    children,
    ...restProps
}) => {
    return (
        <div
        // Original example had 'p-0' for CardContent, so we keep that default
        className={`p-0 ${className || ''}`}
        {...restProps} // Apply any other HTML properties here
        >
        {children} {/* This is where the content inside the CardContent goes */}
        </div>
    )
}

export const CardHeader: React.FC<CardHeaderProps> = ({
    className,
    children,
    ...restProps
}) => {
    return (
        <div
        className={`flex flex-col space-y-1.5 p-6 ${className || ''}`}
        {...restProps}
        >
            {children}
        </div>
    )
}

export const CardTitle: React.FC<CardTitleProps> = ({
    className,
    children,
    ...restProps
}) => {
    return (
        <div
        className={`text-2xl font-semibold text-yellow-500 ${className || ''}`}
        {...restProps}
        >
            {children}
        </div>
    )
}
