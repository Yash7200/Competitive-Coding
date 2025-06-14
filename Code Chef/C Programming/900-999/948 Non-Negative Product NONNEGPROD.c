//Alice has array of N int

//she wants product of all array element

//product of all array element must be non-negative
//which can be 0 or positive.    Negative product is not allowed.

//to do such, she needs to remove some elements from array
//determine minimum elements required to remove

#include <stdio.h>
#include <stdbool.h>
int main()
{
    int t,n;
    scanf("%d",&t);                                 //taking test-cases as input
    for(int i=0;i<t;i++)
    {
        scanf("%d",&n);                             //taking array size as input
        int a[n];                                   //initalizing array
        int negative=0;                               //variable responsible to count negative numbers
        bool z=false;
        for(int j=0;j<n;j++)
        {
            scanf("%d",&a[j]);                      //taking input of each array element
            if(a[j]==0)
            {
                z=true;
            }
            else if(a[j]<0)
            {
                negative++;
            }
        }
        if( z==true || ( (negative%2)==0 ) )
        {
            printf("0\n");
        }
        else
        {
            printf("1\n");
        }
    }
    return 0;
}
