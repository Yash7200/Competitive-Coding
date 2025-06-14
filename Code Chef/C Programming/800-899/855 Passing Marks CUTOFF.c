//'n' students in class
//'x' students passes in exam

//marks of each student is distinct.
//students passes if marks strictly strictly <greater than> passing marks

//1st line in input --> Test Caes ==> T
//1st line in itration --> 'N' students & 'X' passing students
//2nd line in itration --> MARKS of each student respectively

#include <stdio.h>
int main()
{
    int t,n,x;
    scanf("%d",&t);
    for(int i=0;i<t;i++)
    {
        scanf("%d %d",&n,&x);
        int a[n];
        for(int j=0;j<n;j++)
        {
            scanf("%d",&a[j]);
        }
        for(int j=0;j<n-1;j++)
        {
            for(int k=0;k<n-1;k++)
            {
                if(a[k]>a[k+1])
                {
                    int temp=a[k];
                    a[k]=a[k+1];
                    a[k+1]=temp;
                }
            }
        }
        printf("%d\n",(a[n-x]-1));
    }
    return 0;
}
